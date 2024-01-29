window.alert = jest.fn();

import { shallowMount } from '@vue/test-utils';
import App from '../../src/App.vue';
import * as blockchainService from '../../src/utils/blockchainService'; // Adjusted import for mocking

// Mock the blockchainService module
jest.mock('../../src/utils/blockchainService', () => ({
    fetchDoggyData: jest.fn(),
    fetchRandomDoggyData: jest.fn()
}));

describe('App.vue', () => {
    it('fetches doggy data successfully', async () => {
        const mockData = { name: 'Doggy', image: 'doggy.jpg' }; // Example response
        blockchainService.fetchDoggyData.mockResolvedValue(mockData); // Mock fetchDoggyData to resolve with mockData

        const wrapper = shallowMount(App);
        await wrapper.vm.fetchDoggyDataWrapper(); // Call the method

        expect(wrapper.vm.doggyData).toEqual(mockData); // Check if doggyData was updated
        expect(wrapper.vm.loading).toBe(false); // Ensure loading is set to false after fetching
    });

    it('handles fetch doggy data error', async () => {
        blockchainService.fetchDoggyData.mockRejectedValue(new Error('Fetch error')); // Mock fetchDoggyData to reject

        const wrapper = shallowMount(App);
        await wrapper.vm.fetchDoggyDataWrapper(); // Call the method

        expect(wrapper.vm.doggyData).toBeNull(); // Ensure doggyData is null on error
        expect(wrapper.vm.loading).toBe(false); // Ensure loading is set to false after error
    });
    it('updates doggyData and loading on successful fetchDoggyDataWrapper call', async () => {
        const mockData = { name: 'Doggy', image: 'doggy.jpg' };
        blockchainService.fetchDoggyData.mockResolvedValue(mockData);

        const wrapper = shallowMount(App);
        expect(wrapper.vm.loading).toBe(false); // Initial state

        await wrapper.vm.fetchDoggyDataWrapper();

        expect(wrapper.vm.doggyData).toEqual(mockData);
        expect(wrapper.vm.loading).toBe(false); // Should be false after fetch
    });

    it('updates doggyData and loading on successful fetchRandomDoggyDataWrapper call', async () => {
        const mockData = { name: 'Random Doggy', image: 'random-doggy.jpg' };
        blockchainService.fetchRandomDoggyData.mockResolvedValue(mockData);

        const wrapper = shallowMount(App);
        expect(wrapper.vm.loading).toBe(false); // Initial state

        await wrapper.vm.fetchRandomDoggyDataWrapper();

        expect(wrapper.vm.doggyData).toEqual(mockData);
        expect(wrapper.vm.loading).toBe(false); // Should be false after fetch
    });
});
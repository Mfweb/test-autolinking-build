import { NativeModulesProxy, EventEmitter, Subscription } from 'expo-modules-core';

// Import the native module. On web, it will be resolved to TestNativeData.web.ts
// and on native platforms to TestNativeData.ts
import TestNativeDataModule from './TestNativeDataModule';
import TestNativeDataView from './TestNativeDataView';
import { ChangeEventPayload, TestNativeDataViewProps } from './TestNativeData.types';

// Get the native constant value.
export const PI = TestNativeDataModule.PI;

export function hello(): string {
  return TestNativeDataModule.hello();
}

export async function setValueAsync(value: string) {
  return await TestNativeDataModule.setValueAsync(value);
}

const emitter = new EventEmitter(TestNativeDataModule ?? NativeModulesProxy.TestNativeData);

export function addChangeListener(listener: (event: ChangeEventPayload) => void): Subscription {
  return emitter.addListener<ChangeEventPayload>('onChange', listener);
}

export { TestNativeDataView, TestNativeDataViewProps, ChangeEventPayload };

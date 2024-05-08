import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';

import { TestNativeDataViewProps } from './TestNativeData.types';

const NativeView: React.ComponentType<TestNativeDataViewProps> =
  requireNativeViewManager('TestNativeData');

export default function TestNativeDataView(props: TestNativeDataViewProps) {
  return <NativeView {...props} />;
}

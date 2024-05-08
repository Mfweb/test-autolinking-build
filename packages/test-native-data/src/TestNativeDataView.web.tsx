import * as React from 'react';

import { TestNativeDataViewProps } from './TestNativeData.types';

export default function TestNativeDataView(props: TestNativeDataViewProps) {
  return (
    <div>
      <span>{props.name}</span>
    </div>
  );
}

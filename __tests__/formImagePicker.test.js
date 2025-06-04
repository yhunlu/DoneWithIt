import React from 'react';
import { Text } from 'react-native';
import { render, act } from '@testing-library/react-native';
import { useFormikContext } from 'formik';
import { AppForm } from '../app/components/forms';
import FormImagePicker from '../app/components/forms/FormImagePicker';
import ImageInput from '../app/components/ImageInput';

function ValuesDisplay() {
  const { values } = useFormikContext();
  return <Text testID="values">{JSON.stringify(values.images)}</Text>;
}

describe('FormImagePicker', () => {
  it('adds and removes images', () => {
    const { UNSAFE_getAllByType, getByTestId } = render(
      <AppForm initialValues={{ images: [] }} onSubmit={() => {}}>
        <FormImagePicker name="images" />
        <ValuesDisplay />
      </AppForm>
    );

    // Add image
    let inputs = UNSAFE_getAllByType(ImageInput);
    act(() => inputs[0].props.onChangeImage('img1'));
    expect(getByTestId('values').props.children).toContain('img1');

    // Remove image
    inputs = UNSAFE_getAllByType(ImageInput);
    act(() => inputs[0].props.onChangeImage());
    expect(getByTestId('values').props.children).not.toContain('img1');
  });
});

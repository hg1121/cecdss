import React, { useState, useEffect } from 'react';
import {
  Button,
  Input,
  InputGroup,
  InputGroupAddon,
  Label,
  FormGroup,
  Form
} from 'reactstrap';
import { FrcsInputs, Treatments } from '../../../models/Types';

interface Props {
  inputs: FrcsInputs;
  setInputs: (inputs: FrcsInputs) => void;
  disabled: boolean;
}

export const FrcsInputsContainer = (props: Props) => {
  const treatments = Treatments.map(treatment => (
    <option key={treatment.id} value={treatment.id}>
      {treatment.name}
    </option>
  ));
  return (
    <div>
      <div>
        <h4>Forestry and Conversion</h4>
        <Form>
          <FormGroup>
            <Label>Treatment</Label>
            <Input
              type='select'
              value={props.inputs.treatmentid}
              onChange={e =>
                props.setInputs({
                  ...props.inputs,
                  treatmentid: Number(e.target.value)
                })
              }
              disabled={props.disabled}
            >
              {treatments}
            </Input>
          </FormGroup>
          <FormGroup>
            <Label>FRCS System</Label>
            <Input
              type='select'
              value={props.inputs.system}
              onChange={e =>
                props.setInputs({
                  ...props.inputs,
                  system: e.target.value
                })
              }
              disabled={props.disabled}
            >
              <option value='Ground-Based Mech WT'>
                Ground-Based Mechanized Whole Tree
              </option>
              <option value='Ground-Based Manual WT'>
                Ground-Based Manual Whole Tree
              </option>
              <option value='Ground-Based Manual Log'>
                Ground-Based Manual Log
              </option>
              <option value='Ground-Based CTL'>
                Ground-Based Cut To Length
              </option>
              <option value='Cable Manual WT/Log'>
                Cable Manual Whole Tree/Log
              </option>
              <option value='Cable Manual WT'>Cable Manual Whole Tree</option>
              <option value='Cable Manual Log'>Cable Manual Log</option>
              <option value='Cable CTL'>Cable Cut To Length</option>
              <option value='Helicopter Manual WT'>
                Helicopter Manual Whole Tree
              </option>
              <option value='Helicopter CTL'>Helicopter Cut To Length</option>
            </Input>
          </FormGroup>
        </Form>
        <FormGroup>
          <Label>Diesel Fuel Price</Label>
          <InputGroup>
            <Input
              type='text'
              value={props.inputs.dieselFuelPrice}
              onChange={e =>
                props.setInputs({
                  ...props.inputs,
                  dieselFuelPrice: Number(e.target.value)
                })
              }
              disabled={props.disabled}
            />
            <InputGroupAddon addonType='append'>$/gal</InputGroupAddon>
          </InputGroup>
        </FormGroup>
      </div>
      <br />
      <hr />
    </div>
  );
};
import React from 'react';
import { ExpensesBaseYearInputModGP } from '@ucdavis/tea/input.model';
import {
  FormText,
  FormGroup,
  Label,
  InputGroup,
  Input,
  InputGroupAddon
} from 'reactstrap';
import { ExpensesBaseYearInputModGPClass } from '../../../../models/GPClasses';

interface Props {
  inputs: ExpensesBaseYearInputModGP;
  setInputs: (inputs: any) => void;
  disabled: boolean;
}

export const ExpensesBaseYearInputGP = (props: Props) => {
  if (!props.inputs) {
    return null;
  }
  return (
    <>
      <FormGroup>
        <Label>Biomass Fuel Cost</Label>
        <InputGroup>
          <Input
            type='text'
            value={props.inputs.BiomassFuelCost}
            onChange={e =>
              props.setInputs({
                ...props.inputs,
                BiomassFuelCost: e.target.value
              })
            }
            disabled={props.disabled}
          />
          <InputGroupAddon addonType='append'>$/t</InputGroupAddon>
        </InputGroup>
        <FormText color='muted'>
          Biomass Fuel Cost, use negative value for tipping fee
        </FormText>
      </FormGroup>
      <FormGroup>
        <Label>Dual Fuel Cost</Label>
        <InputGroup>
          <Input
            type='text'
            value={props.inputs.DualFuelCost}
            onChange={e =>
              props.setInputs({
                ...props.inputs,
                DualFuelCost: e.target.value
              })
            }
            disabled={props.disabled}
          />
          <InputGroupAddon addonType='append'>$/L</InputGroupAddon>
        </InputGroup>
        <FormText color='muted'>
          Dual Fuel Cost, Default assumes heavy diesel fuel
        </FormText>
      </FormGroup>
      <FormGroup>
        <Label>Labor Cost</Label>
        <InputGroup>
          <Input
            type='text'
            value={props.inputs.LaborCost}
            onChange={e =>
              props.setInputs({
                ...props.inputs,
                LaborCost: e.target.value
              })
            }
            disabled={props.disabled}
          />
          <InputGroupAddon addonType='append'>$/year</InputGroupAddon>
        </InputGroup>
        <FormText color='muted'>Cost of labor to operate facility</FormText>
      </FormGroup>
      <FormGroup>
        <Label>Maintenance Cost</Label>
        <InputGroup>
          <Input
            type='text'
            value={props.inputs.MaintenanceCost}
            onChange={e =>
              props.setInputs({
                ...props.inputs,
                MaintenanceCost: e.target.value
              })
            }
            disabled={props.disabled}
          />
          <InputGroupAddon addonType='append'>$/year</InputGroupAddon>
        </InputGroup>
        <FormText color='muted'>Cost of maintaining the plant</FormText>
      </FormGroup>
      <FormGroup>
        <Label>WasteTreatment</Label>
        <InputGroup>
          <Input
            type='text'
            value={props.inputs.WasteTreatment}
            onChange={e =>
              props.setInputs({
                ...props.inputs,
                WasteTreatment: e.target.value
              })
            }
            disabled={props.disabled}
          />
          <InputGroupAddon addonType='prepend'>$/year</InputGroupAddon>
        </InputGroup>
        <FormText color='muted'>Waste Treatment/Disposal</FormText>
      </FormGroup>
      <FormGroup>
        <Label>Insurance</Label>
        <InputGroup>
          <Input
            type='text'
            value={props.inputs.InsurancePropertyTax}
            onChange={e =>
              props.setInputs({
                ...props.inputs,
                InsurancePropertyTax: e.target.value
              })
            }
            disabled={props.disabled}
          />
          <InputGroupAddon addonType='prepend'>$/year</InputGroupAddon>
        </InputGroup>
        <FormText color='muted'>
          Cost of insurance for the plant plus any property or other local taxes
        </FormText>
      </FormGroup>
      <FormGroup>
        <Label>Utilities</Label>
        <InputGroup>
          <Input
            type='text'
            value={props.inputs.Utilities}
            onChange={e =>
              props.setInputs({
                ...props.inputs,
                Utilities: e.target.value
              })
            }
            disabled={props.disabled}
          />
          <InputGroupAddon addonType='append'>$/year</InputGroupAddon>
        </InputGroup>
        <FormText color='muted'>
          Purchased utilities including power, gas, water, waste disposal
        </FormText>
      </FormGroup>
      <FormGroup>
        <Label>Management</Label>
        <InputGroup>
          <Input
            type='text'
            value={props.inputs.Management}
            onChange={e =>
              props.setInputs({
                ...props.inputs,
                Management: e.target.value
              })
            }
            disabled={props.disabled}
          />
          <InputGroupAddon addonType='append'>$/year</InputGroupAddon>
        </InputGroup>
        <FormText color='muted'>
          Cost for administrative personnel and other administration
        </FormText>
      </FormGroup>
      <FormGroup>
        <Label>Other Operating Expenses</Label>
        <InputGroup>
          <Input
            type='text'
            value={props.inputs.OtherOperatingExpenses}
            onChange={e =>
              props.setInputs({
                ...props.inputs,
                OtherOperatingExpenses: e.target.value
              })
            }
            disabled={props.disabled}
          />
          <InputGroupAddon addonType='append'>$/year</InputGroupAddon>
        </InputGroup>
        <FormText color='muted'>
          All other expenses for operating the plant, for example natural gas
          not included in utilities, chemicals, or additives
        </FormText>
      </FormGroup>
    </>
  );
};

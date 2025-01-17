import React from 'react';
import {
  Input,
  Label,
  InputGroup,
  InputGroupAddon,
  FormText,
  FormGroup
} from 'reactstrap';
import {
  ElectricalFuelBaseYearInputModCHP,
  HeatBaseYearInputMod,
  ExpensesBaseYearInputModGPO,
  TaxesInputMod,
  IncomeOtherThanEnergyInputMod,
  EscalationInflationInputMod,
  FinancingInputMod,
  CarbonCredit
} from '@ucdavis/tea/input.model';
import { ElectricalAndFuelBaseYearInput } from '../ElectricalAndFuelBaseYearInput';
import { HeatBaseYearInput } from '../HeatBaseYearInput';
import { ExpensesBaseYearInput } from '../ExpensesBaseYearInput';
import { TaxesInput } from '../TaxesInput';
import { IncomeOtherThanEnergyInput } from '../IncomeOtherThanEnergyInput';
import { EscalationInflationInput } from '../EscalationInflationInput';
import { FinancingInput } from '../FinancingInput';
import { CarbonCreditInput } from '../CarbonCreditInput';

interface Props {
  // inputs: InputModCHP;
  // setInputs: (inputs: InputModCHP) => void;
  inputs: any;
  setInputs: (inputs: any) => void;
  disabled: boolean;
}

export const CombinedHeatAndPower = (props: Props) => {
  if (!props.inputs) {
    return null;
  }
  return (
    <>
      <FormGroup>
        <Label>Capital Cost</Label>
        <InputGroup>
          <Input
            type='text'
            value={props.inputs.CapitalCost}
            onChange={e =>
              props.setInputs({
                ...props.inputs,
                CapitalCost: e.target.value,
                CapitalCostManuallySet: true
              })
            }
            disabled={props.disabled}
          />
          <InputGroupAddon addonType='prepend'>$</InputGroupAddon>
        </InputGroup>
        <FormText color='muted'>
          Total installed cost of plant, including truck unloading cost
        </FormText>
      </FormGroup>

      <ElectricalAndFuelBaseYearInput
        inputs={props.inputs.ElectricalFuelBaseYear}
        setInputs={(inputs: ElectricalFuelBaseYearInputModCHP) =>
          props.setInputs({
            ...props.inputs,
            ElectricalFuelBaseYear: inputs
          })
        }
        disabled={props.disabled}
      />
      <HeatBaseYearInput
        inputs={props.inputs.HeatBaseYear}
        setInputs={(inputs: HeatBaseYearInputMod) =>
          props.setInputs({ ...props.inputs, HeatBaseYear: inputs })
        }
        disabled={props.disabled}
      />
      <ExpensesBaseYearInput
        inputs={props.inputs.ExpensesBaseYear}
        setInputs={(inputs: ExpensesBaseYearInputModGPO) =>
          props.setInputs({ ...props.inputs, ExpensesBaseYear: inputs })
        }
        disabled={props.disabled}
      />
      <TaxesInput
        inputs={props.inputs.Taxes}
        setInputs={(inputs: TaxesInputMod) =>
          props.setInputs({ ...props.inputs, Taxes: inputs })
        }
        disabled={props.disabled}
      />
      <IncomeOtherThanEnergyInput
        inputs={props.inputs.IncomeOtherThanEnergy}
        setInputs={(inputs: IncomeOtherThanEnergyInputMod) =>
          props.setInputs({ ...props.inputs, IncomeOtherThanEnergy: inputs })
        }
        disabled={props.disabled}
      />
      <CarbonCreditInput
        inputs={props.inputs.CarbonCredit}
        setInputs={(inputs: CarbonCredit) =>
          props.setInputs({ ...props.inputs, CarbonCredit: inputs })
        }
        includeCredits={props.inputs.IncludeCarbonCredit}
        setIncludeCredits={(includeCredits: boolean) => {
          props.setInputs({
            ...props.inputs,
            IncludeCarbonCredit: includeCredits
          });
        }}
        disabled={props.disabled}
      ></CarbonCreditInput>
      <EscalationInflationInput
        inputs={props.inputs.EscalationInflation}
        setInputs={(inputs: EscalationInflationInputMod) =>
          props.setInputs({ ...props.inputs, EscalationInflation: inputs })
        }
        disabled={props.disabled}
      />
      <FinancingInput
        inputs={props.inputs.Financing}
        setInputs={(inputs: FinancingInputMod) =>
          props.setInputs({ ...props.inputs, Financing: inputs })
        }
        disabled={props.disabled}
      />
    </>
  );
};

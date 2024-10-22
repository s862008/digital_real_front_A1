import {Component} from '@angular/core';
import {SmartParameters} from "../../../core/models/parametrs";

@Component({
  selector: 'app-chosen-parameters',
  templateUrl: './chosen-parameters.component.html',
  styleUrl: './chosen-parameters.component.css'
})
export class ChosenParametersComponent {

  constructor(public smartParameters: SmartParameters) {
  }

  get activeParameters() {
    return Object.entries(this.smartParameters).filter(([key, value]) => {
      return value === true || (value !== null && value !== 0);
    });
  }

  // resetParameter(key:  keyof SmartParameters) {
  //   this.smartParameters[key as keyof SmartParameters] = this.getDefaultValue(key);
  // }

  private getDefaultValue(key: keyof SmartParameters) :any {
    // Возвращаем значение по умолчанию для сброса
    // switch (key) {
    //   case 'isApartments':
    //   case 'isFlat':
    //   case 'isBlandPlan':
    //   case 'isIsolatePlan':
    //   case 'isNotFirstFloor':
    //   case 'isNotLastFloor':
    //   case 'isLastFloor':
    //     return false;
    //   case 'apartmentTypeWeight':
    //   case 'planWeight':
    //   case 'floorWeight':
    //   case 'floorMin':
    //   case 'floorMax':
    //     return 0;
    //   default:
    //     return null;
    // }
  }
}

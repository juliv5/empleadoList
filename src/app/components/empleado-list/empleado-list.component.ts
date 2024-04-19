import { Component } from '@angular/core';
import { Empleado } from '../../models/Empleado';

@Component({
  selector: 'app-empleado-list',
  templateUrl: './empleado-list.component.html',
  styleUrl: './empleado-list.component.scss'
})
export class EmpleadoListComponent {
  listEmpleados: Empleado[] = [{No: 19141141,
  RFC: 'test',
Nombre_completo: 'VANNESA',
Apellido_Paterno: 'FERNANDEZ',
Apellido_Materno: '',
Sexo: 'femenino',
Salario: 10000},
{No: 19141142,
  RFC: 'test',
Nombre_completo: 'ITZEL GUADALUPE',
Apellido_Paterno: 'ANDRADE',
Apellido_Materno: 'GUTIERREZ',
Sexo: 'femenino',
Salario: 12000},
{No: 19141143,
  RFC: 'test',
Nombre_completo: 'KEVIN DANIEL',
Apellido_Paterno: 'AVELLANEDA',
Apellido_Materno: 'TREJO',
Sexo: 'masculino',
Salario: 8000},
{No: 19141144,
  RFC: 'test',
Nombre_completo: 'SERGIO LEONARDO',
Apellido_Paterno: 'CAMPOS',
Apellido_Materno: 'RANGEL',
Sexo: 'masculino',
Salario: 15100},
{No: 19141145,
  RFC: 'test',
Nombre_completo: 'YAZMIN ALEJANDRA',
Apellido_Paterno: 'CASTILLO',
Apellido_Materno: 'MARTINEZ',
Sexo: 'femenino',
Salario: 95500},
{No: 19141146,
  RFC: 'test',
Nombre_completo: 'DANIELA',
Apellido_Paterno: 'CASTRO',
Apellido_Materno: 'GARCIA',
Sexo: 'femenino',
Salario: 12000},
]
constructor()
{

}
ngOnInit(): void{

}
obtenerTotalEmpleados(sex: string): number
{
  if(sex=='masculino'){
    return this.listEmpleados.filter(list => list.Sexo == 'masculino').length;
  }
  if(sex=='femenino'){
    return this.listEmpleados.filter(list => list.Sexo == 'femenino').length;
  }
  return this.listEmpleados.length; 
}
radioBottonSeleccionado: string = 'empleados'; 
genero: any = [
  'masculino',
  'femenino',
  'empleados',
];
radioChangeHandler (event:any)
{
  this.genero=event.target.value;
}
}

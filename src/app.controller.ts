import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // ruta -> controlador -> servicio
  @Get()
  getHello(): string { 
    return this.appService.getHello();
  }

  @Get('/saludo')
  funSaludo(){
    return 'Hola willy';
  }

  @Get('/producto')
  funListarProductos(){
    return [
      {nombre: "teclado", precio: 240, stocks:5},
      {nombre: "camara", precio: 100, stocks:12}
    ];
  }

  @Post('/producto')
  funGuardarProducto(
    @Body()
    datos
  ){
    console.log(datos);
    return 'guardando producto...'
  }

  @Get('/producto/:id')
  funMostrar(@Param('id') id){
    return "Mostrando producto..."+id;
  }
  
  @Put('/producto/:id')
  funModificar(){
    return "Modificando producto..."
  }

  @Delete('/producto/:id')
  funEliminar(){
    return "Eliminando producto..."
  }
}

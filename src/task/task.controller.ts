import { Controller, Get, Post, Put, Delete, Body } from '@nestjs/common';

@Controller('task')
export class TaskController {
  @Get()
  getTask(): string {
    return 'Retrieving Tasks';
  }

  @Post()
  createTask(@Body() task): string {
    console.log(task);
    return 'Creating a task';
  }

  @Put()
  updateTask(): string {
    return 'Updating a task';
  }

  @Delete()
  deleteTask(): string {
    return ' Deleting a task';
  }
}

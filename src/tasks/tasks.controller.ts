import { Controller, Get, Param, Post, Put, Delete, Body } from '@nestjs/common';
import { TaskService } from './shared/task.service';
import { Task } from './shared/task';
import { promises } from 'dns';

@Controller('tasks')
export class TasksController {
    
    constructor(
        private taskService: TaskService
    ) {}

    @Get()
    async getAll() : Promise<Task[]> {
        return this.taskService.getAll();
    }

    @Get(':id') 
    async getById(@Param('id') id: String) : Promise<Task> {
        return this.taskService.getById(id);
    }

    @Post()
    async create(@Body() task: Task) : Promise<Task> {
        return this.taskService.create(task);
    }

    @Put(':id')
    async update(@Param('id') id: String, @Body() task: Task) : Promise<Task> {
        return this.taskService.update(id, task);
    }

    @Delete(':id')
    async delete(@Param('id') id: String) {
        this.taskService.delete(id);
    }

}

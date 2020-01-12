class TasksController < ApplicationController
   def index
     render json: Task.order(:id)
  end

  def update
    task = Task.find(params[:id])
    task.update_attributes(task_params)
    render json: task
  end

  def create
    task = Task.create(task_params)
    render json: task
  end

  # so we need to add the delete endpoint to the controller
  # lastly, re-render all the items (which will no longer include the deleted one)
  def destroy
    #Code below indicates that given the id that's passed through the params we should load the correct item from the database.
    task = Task.find(params[:id])
    task.destroy(task_params) 
    #render json: task
  end  

  private

  def task_params
    params.require(:task).permit(:done, :title)
  end
end

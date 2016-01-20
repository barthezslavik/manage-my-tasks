require 'test_helper'

class TasksControllerTest < ActionController::TestCase
  setup do
    @task = tasks(:one)
  end

  test "should get index" do
    get :index, format: :json
    assert_response :success
    assert_not_nil assigns(:tasks)
  end

  test "should get new" do
    get :new, format: :json
    assert_response :success
  end

  test "should create task" do
    assert_difference('Task.count') do
      post :create, task: { deadline: @task.deadline, done: @task.done, name: @task.name,
      project_id: @task.project_id }, format: :json
    end
    assert_response :success
  end

  test "should show task" do
    get :show, id: @task, format: :json
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @task, format: :json
    assert_response :success
  end

  test "should update task" do
    patch :update, id: @task, task: { deadline: @task.deadline, description: @task.description,
    done: @task.done, name: @task.name, project_id: @task.project_id }, format: :json
    assert_response :success
  end

  test "should destroy task" do
    assert_difference('Task.count', -1) do
      delete :destroy, id: @task, format: :json
    end

    assert_response :success
  end
end

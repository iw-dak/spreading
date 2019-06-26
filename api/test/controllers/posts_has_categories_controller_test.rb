require 'test_helper'

class PostsHasCategoriesControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get posts_has_categories_index_url
    assert_response :success
  end

  test "should get show" do
    get posts_has_categories_show_url
    assert_response :success
  end

  test "should get create" do
    get posts_has_categories_create_url
    assert_response :success
  end

  test "should get update" do
    get posts_has_categories_update_url
    assert_response :success
  end

  test "should get destroy" do
    get posts_has_categories_destroy_url
    assert_response :success
  end

end

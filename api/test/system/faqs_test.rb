require "application_system_test_case"

class FaqsTest < ApplicationSystemTestCase
  setup do
    @faq = faqs(:one)
  end

  test "visiting the index" do
    visit faqs_url
    assert_selector "h1", text: "Faqs"
  end

  test "creating a Faqs" do
    visit faqs_url
    click_on "New Faqs"

    fill_in "Answer", with: @faq.answer
    fill_in "Question", with: @faq.question
    click_on "Create Faqs"

    assert_text "Faqs was successfully created"
    click_on "Back"
  end

  test "updating a Faqs" do
    visit faqs_url
    click_on "Edit", match: :first

    fill_in "Answer", with: @faq.answer
    fill_in "Question", with: @faq.question
    click_on "Update Faqs"

    assert_text "Faqs was successfully updated"
    click_on "Back"
  end

  test "destroying a Faqs" do
    visit faqs_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Faqs was successfully destroyed"
  end
end

class NewslettersController < ApplicationController
    skip_before_action :verify_authenticity_token
    before_action :authenticate_request, only: []


    def create
        @newsletter = Newsletter.new(newsletter_params)

        if not Newsletter.find_by(email: newsletter_params["email"])
            if @newsletter.save
                render json: @newsletter, status: :created, location: @newsletter
            else
                render json: {message: "Erreur serveur, enregistrement imposisble."}, status: :unprocessable_entity
            end
        else
            render json: {message: "Cette adresse email est déjà inscrite à la Newsletter"}, status: :unprocessable_entity
        end
    end

    def newsletter_params
        params.permit(:email)
    end
end

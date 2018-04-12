class Api::PeopleController < ApplicationController
    include HTTParty
    attr_accessor :facts
    def index
        api_key = "ak_b7b6f9dbca089cec5ef461284c7dc2b85de2f1c3071134442aaadc27fd53a634"
        @response = HTTParty.get('https://api.salesloft.com/v2/people.json?per_page=100', 
        headers: { "Content-Type": "application/json",
                    "Authorization": "Bearer #{api_key}" })
            @people = @response["data"]
            render json: @people
    end
end

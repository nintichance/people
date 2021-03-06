class Api::PeopleController < ApplicationController
    include HTTParty
    attr_accessor :facts
    def index
        api_key = ENV['API_KEY']
        @response = HTTParty.get('https://api.salesloft.com/v2/people.json?per_page=100', 
        headers: { "Content-Type": "application/json",
                    "Authorization": "Bearer #{api_key}" })
            @people = @response["data"]
            render json: @people
    end
end

class Api::PeopleController < ApplicationController
    include HTTParty
    attr_accessor :facts
    def index
        api_key = process.env.API_KEY
        response = get('https://api.salesloft.com/v2/people.json?per_page=100', 
        headers: { "Content-Type": "application/json",
                    "Authorization": "Bearer #{api_key}" })
    if response.success?
      @people = reponse.data
      render json: @people
    else
      puts "Request failed"
    end
end
class StickersController < ApplicationController
	def index
		@stickers = Stickers.all
	end
end

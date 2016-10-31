class StickerboardsController < ApplicationController
	def index
		@stickerboards = Stickerboards.all
	end
end		

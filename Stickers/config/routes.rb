Rails.application.routes.draw do
  resource :articles

  root 'welcome#index'  
  get '/stickerboards' => 'stickerboards#index'
  get '/stickers' => 'stickers#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end

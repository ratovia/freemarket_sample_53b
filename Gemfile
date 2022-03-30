source 'https://rubygems.org'
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby '2.5.1'

# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '~> 5.2.3'
# Use mysql as the database for Active Record
gem 'mysql2', '>= 0.4.4', '< 0.6.0'
# Use Puma as the app server
gem 'puma', '~> 4.3'
# Use SCSS for stylesheets
gem 'sass-rails'
# Use Uglifier as compressor for JavaScript assets
gem 'uglifier', '>= 1.3.0'
# See https://github.com/rails/execjs#readme for more supported runtimes
# gem 'mini_racer', platforms: :ruby

# Use CoffeeScript for .coffee assets and views
gem 'coffee-rails', '~> 4.2'
# Turbolinks makes navigating your web application faster. Read more: https://github.com/turbolinks/turbolinks
gem 'turbolinks', '~> 5'
# Build JSON APIs with ease. Read more: https://github.com/rails/jbuilder
gem 'jbuilder', '~> 2.5'
# Use Redis adapter to run Action Cable in production
# gem 'redis', '~> 4.0'
# Use ActiveModel has_secure_password
# gem 'bcrypt', '~> 3.1.7'

# Use ActiveStorage variant
# gem 'mini_magick', '~> 4.8'

# Use Capistrano for deployment
# gem 'capistrano-rails', group: :development
# Use jquery as the JavaScript library
gem 'active_hash'
gem 'devise', '>= 4.6.2'
gem 'erb2haml', '>= 0.1.5'
gem 'font-awesome-rails', '>= 4.7.0.5'
gem 'haml-rails', '>= 2.0.1'
gem 'jquery-rails', '>= 4.3.3', '< 4.3.5'
# Reduces boot times through caching; required in config/boot.rb
gem 'bootsnap', '>= 1.1.0', require: false
gem 'gretel'
gem 'nokogiri', ">= 1.10.4"
gem 'omniauth'
gem 'omniauth-facebook'
gem 'omniauth-google-oauth2'
gem "omniauth-rails_csrf_protection"
gem 'payjp'
gem 'ransack', github: 'activerecord-hackery/ransack'
gem 'toastr_rails'

gem 'carrierwave'
gem 'mini_magick'
gem 'rack-cors'

group :development, :test do
  # Call 'byebug' anywhere in the code to stop execution and get a debugger console
  gem 'bcrypt_pbkdf'
  gem 'bullet', '>= 6.0.0'
  gem 'byebug', platforms: %i[mri mingw x64_mingw]
  gem 'capistrano', '>= 3.11.2'
  gem 'capistrano-bundler', '>= 1.5.0'
  gem 'capistrano-rails', '>= 1.4.0'
  gem 'capistrano-rbenv', '>= 2.1.4'
  gem 'capistrano3-unicorn', '>= 0.2.1'
  gem 'ed25519'
  gem 'factory_bot_rails', '>= 5.0.2'
  gem 'faker', '>= 1.9.3'
  gem 'pry-byebug'
  gem 'pry-rails', '>= 0.3.9'
  gem 'rails-controller-testing', '>= 1.0.4'
  gem 'rspec-rails', '~> 3.5'
end

group :development do
  # Access an interactive console on exception pages or by calling 'console' anywhere in the code.
  gem 'listen', '>= 3.0.5', '< 3.2'
  gem 'web-console', '>= 3.3.0'
  # Spring speeds up development by keeping your application running in the background. Read more: https://github.com/rails/spring
  gem 'rubocop', require: false
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
end

group :test do
  # Adds support for Capybara system testing and selenium driver
  gem 'capybara'
  gem 'selenium-webdriver'
end

group :production do
  gem "aws-sdk-s3"
  gem 'unicorn', '5.5.1'
end

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem 'tzinfo-data', platforms: %i[mingw mswin x64_mingw jruby]

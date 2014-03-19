#!/usr/bin/env ruby

require 'rack'

profile_photo = ""
profile_photo_type = "text/plain"

map "/" do
  use Rack::Static, :urls => ["/index.html", "/get-user-media-input.js", "/to-blob.js"], :root => 'public', :index => 'index.html', :header_rules => [[:all, {'Cache-Control' => 'private,max-age=0,must-revalidate,no-store'}]]
  app = proc do |env|
    req = Rack::Request.new(env)
    params = Rack::Multipart.parse_multipart(env)
    if params
      profile_photo = params["profile-photo"][:tempfile].read
      profile_photo_type = params["profile-photo"][:type]
    end
    [201, {"Content-Type" => profile_photo_type}, StringIO.new(profile_photo)]
  end
  run app
end

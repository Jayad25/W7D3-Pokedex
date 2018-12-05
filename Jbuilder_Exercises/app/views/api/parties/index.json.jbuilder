json.array! @parties.each do |party|
  json.extract! party, :name, :location, :guests  
end
json.extract! @party, :name, :location, :guests

json.guests @party.guests do |guest|
  json.gifts guest.gifts, :title
  json.name guest.name
end
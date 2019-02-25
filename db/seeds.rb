# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

ActiveRecord::Base.transaction do

  Bench.destroy_all
  b1 = Bench.create!(description: 'bench1', lat: 37.799042, lng: -122.401115)
  b2 = Bench.create!(description: 'bench2', lat: 37.801526, lng: -122.401587)
  b2 = Bench.create!(description: 'bench3', lat: 37.791005, lng: -122.399205)

end
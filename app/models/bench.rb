# == Schema Information
#
# Table name: benches
#
#  id          :bigint(8)        not null, primary key
#  description :string           not null
#  lat         :float            not null
#  lng         :float            not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Bench < ApplicationRecord

  validates :description, :lat, :lng, presence: true

  def self.in_bounds(bounds)
    ne_lat = bounds['northEast'][lat]
    ne_lng = bounds['northEast'][lng]
    sw_lat = bounds['southWest'][lat]
    sw_lng = bounds['southWest'][lng]
    Bench.where('lat BETWEEN ? AND ?', sw_lat, ne_lat)
         .where('lng BETWEEN ? AND ?', sw_lng, ne_lng)
  end
end

class Note < ActiveRecord::Base
	validates :name, :time, :body, presence: true
	validates :name, format: { with: /[a-zA-z \.]/ }
	validates :name, length: { maximum: 255 }
	validates :time, format: { with: /(0[1-9]|1[012])[- \/.](0[1-9]|[12][0-9]|3[01])[- \/.](19|20)\d\d/}

end

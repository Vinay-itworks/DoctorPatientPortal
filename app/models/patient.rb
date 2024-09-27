class Patient < ApplicationRecord
  has_many :appointments
  has_many :doctors, through: :appointments
  validates :first_name, :last_name, presence: true, length: { in: 2..15 }
  validates :contact, uniqueness: true, length: { is: 10 }
end

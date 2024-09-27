class Appointment < ApplicationRecord
  belongs_to :doctor
  belongs_to :patient
  validates :doctor_id, :patient_id, :appointment_date, presence: true
  validates :status, inclusion: {
    in: [ "Pending", "Visited", "NoVisit" ],
    message: "%{value} is not a valid status."
  }
end

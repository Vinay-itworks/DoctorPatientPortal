json.extract! doctor, :id, :first_name, :last_name, :qualification, :contact, :created_at, :updated_at
json.url doctor_url(doctor, format: :json)

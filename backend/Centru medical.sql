CREATE DATABASE centru_medical;

USE centru_medical;

CREATE TABLE doctor(
		doctor_id INTEGER PRIMARY KEY NOT NULL AUTO_INCREMENT,
        card_id VARCHAR(6) NOT NULL,
        firstname VARCHAR(50) NOT NULL,
        lastname VARCHAR(50) NOT NULL,
        phone VARCHAR(10)  NOT NULL,
        email VARCHAR(150) NOT NULL,
        address VARCHAR(100) NOT NULL,
        specialization VARCHAR(30) NOT NULL,
        medical_center_id INTEGER NOT NULL
);
INSERT INTO doctor (doctor_id, card_id, firstname, lastname, phone, email, address, specialization, medical_center_id) VALUES ('12345','0001','Mirel', 'Iurascu','0768791274', 'mirel.iurascu@gmail.com','-','Pediatric', '11225');
INSERT INTO doctor (doctor_id, card_id, firstname, lastname, phone, email, address, specialization, medical_center_id) VALUES ('57412','0012','Stefan', 'Dinca','0768492544', 'stefan_dinca12@gmail.com','Str. Mihai Viteazu 9','ICU', '11226');
INSERT INTO doctor (doctor_id, card_id, firstname, lastname, phone, email, address, specialization, medical_center_id) VALUES ('46698','4500','Alexandra', 'Patrascu','-', 'alexandra.patr33@gmail.com','-','ER', '11225');
INSERT INTO doctor (doctor_id, card_id, firstname, lastname, phone, email, address, specialization, medical_center_id) VALUES ('12346','0110','Iulia', 'Iurascu','0745886921', 'iurascu.iulia@gmail.com','Bulevardul Unirii 5','Pediatric', '11226');
INSERT INTO doctor (doctor_id, card_id, firstname, lastname, phone, email, address, specialization, medical_center_id) VALUES ('11545','1502','Ana', 'Stanescu','0768554674', 'stanescu.ana@gmail.com','-','ER', '11227');
INSERT INTO doctor (doctor_id, card_id, firstname, lastname, phone, email, address, specialization, medical_center_id) VALUES ('12055','0992','Darian', 'Dragomir','0768993227', 'dragomir.darian@gmail.com','-','ICU', '11225');

DESCRIBE doctor;
SELECT * FROM doctor;

CREATE TABLE patient(
		patient_id INTEGER PRIMARY KEY NOT NULL AUTO_INCREMENT,
        firstname VARCHAR(50) NOT NULL,
        lastname VARCHAR(50) NOT NULL,
        cnp VARCHAR(13) NOT NULL,
        identification_number VARCHAR(10) NOT NULL,
        check_in DATETIME DEFAULT(NOW()),
        doctor_id INTEGER,
        diagnose VARCHAR(255),
        room_number VARCHAR(4),
        phone VARCHAR(10) NOT NULL,
        address VARCHAR(100) NOT NULL,
        medical_center_id INTEGER NOT NULL
);
INSERT INTO patient (patient_id, firstname, lastname, cnp, identification_number, doctor_id, diagnose, room_number, phone, address, medical_center_id) VALUES ('98775','Iarina', 'Popescu','6031205282247', 'OT155798','46698','Diabetes', '110', '-', '-' , '11226');
INSERT INTO patient (patient_id, firstname, lastname, cnp, identification_number, doctor_id, diagnose, room_number, phone, address, medical_center_id) VALUES ('11586','Alice', 'Dan','6000115282274', 'GL127797','12055','Multiple Sclerosis', '117', '0769847156', 'Aleea Cetatuia 6' , '11225');
INSERT INTO patient (patient_id, firstname, lastname, cnp, identification_number, doctor_id, diagnose, room_number, phone, address, medical_center_id) VALUES ('10045','Andreea', 'Cucoanes','6170205272201', 'VN147952','12346','Acute fever', '114', '0748168957', 'Str Coloniei 2' , '11227');
INSERT INTO patient (patient_id, firstname, lastname, cnp, identification_number, doctor_id, diagnose, room_number, phone, address, medical_center_id) VALUES ('98546','Sorin', 'Diaconu','5011120282244', 'OT155798','57412','Multiple Sclerosis', '111', '0789871023', 'Str Ion Manolescu 5' , '11225');
INSERT INTO patient (patient_id, firstname, lastname, cnp, identification_number, doctor_id, diagnose, room_number, phone, address, medical_center_id) VALUES ('54876','Octavian', 'Dalgeanu','5041207282247', 'DJ215541','46698','Heart Attack', '109', '-', 'Str. Profesor Filip Marcu' , '11225');
INSERT INTO patient (patient_id, firstname, lastname, cnp, identification_number, doctor_id, diagnose, room_number, phone, address, medical_center_id) VALUES ('20134','Mihnea', 'Coserea','5030612282291', 'CT785541','12055','Skin Cancer', '106', '0735871695', '-' , '11226');

DESCRIBE patient;
SELECT * FROM patient;

CREATE TABLE staff(
		staff_id INTEGER PRIMARY KEY AUTO_INCREMENT,
		card_id VARCHAR(6) NOT NULL,
        firstname VARCHAR(50) NOT NULL,
        lastname VARCHAR(50) NOT NULL,
        phone VARCHAR(10) NOT NULL,
        address VARCHAR(100) NOT NULL,
        staff_job VARCHAR(50) NOT NULL,
        medical_center_id INTEGER NOT NULL
);
INSERT INTO staff (staff_id, card_id, firstname, lastname, phone, address, staff_job, medical_center_id) VALUES ('66654','333', 'Bogdan', 'Stanciu', '0745007324', '-', 'ICU staff', '11226');
INSERT INTO staff (staff_id, card_id, firstname, lastname, phone, address, staff_job, medical_center_id) VALUES ('66677','332', 'Adi', 'Dan', '0789547567', '-', 'ICU staff', '11227');
INSERT INTO staff (staff_id, card_id, firstname, lastname, phone, address, staff_job, medical_center_id) VALUES ('64588','331', 'Alin', 'Ionescu', '0745578997', '-', 'ER staff', '11226');
INSERT INTO staff (staff_id, card_id, firstname, lastname, phone, address, staff_job, medical_center_id) VALUES ('69856','335', 'Mircea', 'Sanciu', '0768957422', 'Str Fratii Buzesti 6', 'ER staff', '11225');
INSERT INTO staff (staff_id, card_id, firstname, lastname, phone, address, staff_job, medical_center_id) VALUES ('60066','330', 'Maria', 'Tataru', '0768990014', '-', 'Pediatric staff', '11226');
INSERT INTO staff (staff_id, card_id, firstname, lastname, phone, address, staff_job, medical_center_id) VALUES ('60885','337', 'Iuliana', 'Tataru', '0745582100', '-', 'Pediatric staff', '11225');
INSERT INTO staff (staff_id, card_id, firstname, lastname, phone, address, staff_job, medical_center_id) VALUES ('64786','389', 'Mircea', 'Achimescu', '0747822365', 'Str Fratii Buzesti 1', 'ICU staff', '11225');

DESCRIBE staff;
SELECT * FROM staff;

CREATE TABLE appointment(
		appointment_id INTEGER PRIMARY KEY AUTO_INCREMENT,
        patient_id INTEGER NOT NULL,
        doctor_id INTEGER NOT NULL,
        appointment_date DATETIME NOT NULL
);
INSERT INTO appointment (appointment_id, patient_id, doctor_id, appointment_date) VALUES ('22033', '11586', '12055', '2024-12-01');
INSERT INTO appointment (appointment_id, patient_id, doctor_id, appointment_date) VALUES ('22044', '10045', '12346', '2024-08-12');
INSERT INTO appointment (appointment_id, patient_id, doctor_id, appointment_date) VALUES ('22877', '54876', '46698', '2024-07-13');
INSERT INTO appointment (appointment_id, patient_id, doctor_id, appointment_date) VALUES ('22699', '20134', '12055', '2024-11-03');

DESCRIBE appointment;
SELECT * FROM appointment;

CREATE TABLE medical_center(
		medical_center_id INTEGER PRIMARY KEY AUTO_INCREMENT,
        medical_center_name VARCHAR(50) NOT NULL,
        medical_center_city VARCHAR(20) NOT NULL
);
INSERT INTO medical_center (medical_center_id, medical_center_name, medical_center_city) VALUES ('11225', 'MedLife', 'Bucharest');
INSERT INTO medical_center (medical_center_id, medical_center_name, medical_center_city) VALUES ('11227', 'Regina Maria', 'Bucharest');
INSERT INTO medical_center (medical_center_id, medical_center_name, medical_center_city) VALUES ('11226', 'Sanador', 'Craiova');

DESCRIBE medical_center;
SELECT * FROM medical_center;

CREATE TABLE access(
		card_id VARCHAR(6) PRIMARY KEY NOT NULL,
        password VARCHAR(255) NOT NULL,
        check_in DATETIME DEFAULT(NOW())
);
INSERT INTO access (card_id, password) VALUES ('0001', '1234');
INSERT INTO access (card_id, password) VALUES ('0012', '0313');
INSERT INTO access (card_id, password) VALUES ('4500', '1145');
INSERT INTO access (card_id, password) VALUES ('0110', '6895');
INSERT INTO access (card_id, password) VALUES ('1502', '2257');
INSERT INTO access (card_id, password) VALUES ('0992', '1689');

DESCRIBE access;
SELECT * FROM access;

CREATE TABLE inventory(
		medicament_id INTEGER PRIMARY KEY NOT NULL AUTO_INCREMENT,
        medicament_name VARCHAR(200) NOT NULL,
        quantity INTEGER NOT NULL,
        disease VARCHAR(255) NOT NULL, 
        medical_center_id INTEGER NOT NULL
);
INSERT INTO inventory (medicament_id, medicament_name, quantity, disease, medical_center_id) VALUES ('0011', 'Nurofen', '50', 'Acute fever', '11225');
INSERT INTO inventory (medicament_id, medicament_name, quantity, disease, medical_center_id) VALUES ('0021', 'Aspacardin', '50', 'Heart Attack', '11225');
INSERT INTO inventory (medicament_id, medicament_name, quantity, disease, medical_center_id) VALUES ('0041', 'Cotellic', '30', 'Skin cancer', '11226');
INSERT INTO inventory (medicament_id, medicament_name, quantity, disease, medical_center_id) VALUES ('0081', 'Prednisone', '10', 'Multiple Sclerosis', '11225');

DESCRIBE inventory;
SELECT * FROM inventory;

ALTER TABLE inventory ADD FOREIGN KEY (medical_center_id) REFERENCES medical_center(medical_center_id);

ALTER TABLE doctor ADD FOREIGN KEY (card_id) REFERENCES access(card_id);

ALTER TABLE doctor ADD FOREIGN KEY (medical_center_id) REFERENCES medical_center(medical_center_id);

ALTER TABLE patient ADD FOREIGN KEY (doctor_id) REFERENCES doctor(doctor_id);

ALTER TABLE patient ADD FOREIGN KEY (medical_center_id) REFERENCES medical_center(medical_center_id);

ALTER TABLE appointment ADD FOREIGN KEY (patient_id) REFERENCES patient(patient_id);

ALTER TABLE appointment ADD FOREIGN KEY (doctor_id) REFERENCES doctor(doctor_id);

ALTER TABLE staff ADD FOREIGN KEY (medical_center_id) REFERENCES medical_center(medical_center_id);

ALTER TABLE staff ADD FOREIGN KEY (card_id) REFERENCES access(card_id);
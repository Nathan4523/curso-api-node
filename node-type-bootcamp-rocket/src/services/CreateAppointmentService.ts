import { startOfHour } from 'date-fns';
import Appointment from '../models/Appointment';
import AppointmentsRepository from '../repositories/AppointmentRepository';

//data transfer object
interface RequestDTO {
    provider: string;
    date: Date;
}

/**
 * Dependency Inversion ( SOLID )
 */

class CreateAppointmentService {
    private appointmentRepository: AppointmentsRepository;

    constructor(appointmentRepository: AppointmentsRepository) {
        this.appointmentRepository = appointmentRepository;
    }

    public execute({ date, provider }: RequestDTO): Appointment {
        const appointmentDate = startOfHour(date);


        const findAppointmentInSameDate = this.appointmentRepository.findByDate(appointmentDate);

        if (findAppointmentInSameDate)
            throw Error('This appointment is already booked');

        const appointment = this.appointmentRepository.create({
            provider,
            date: appointmentDate
        })

        return appointment
    }
}

export default CreateAppointmentService;
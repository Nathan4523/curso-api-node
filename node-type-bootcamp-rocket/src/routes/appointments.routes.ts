import { Router } from 'express';
import { parseISO } from 'date-fns';

import AppointmentRepository from '../repositories/AppointmentRepository';
import CreateAppointmentService from '../services/CreateAppointmentService';

const appointmentsRouter = Router();
const appointmentsRepository = new AppointmentRepository();

// A roda só deve receber a requisição, chamar outro arquivo, devolver uma resposta

appointmentsRouter.get('/', (request, response) => {
    const appointments = appointmentsRepository.all();
    return response.json(appointments);
});

appointmentsRouter.post('/', (request, response) => {
    try {
        const { provider, date } = request.body;

        const parseDate = parseISO(date);

        const createAppointment = new CreateAppointmentService(appointmentsRepository);
        const appointment = createAppointment.execute({ provider, date: parseDate });

        return response.json(appointment);
    } catch (err) {
        return response.status(400).json({ error: err.message })
    }
});

export default appointmentsRouter;

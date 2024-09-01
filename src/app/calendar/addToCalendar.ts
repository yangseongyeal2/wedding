import { createEvent } from 'ics';

export const addToCalendar = (event: {
    title: string;
    description: string;
    start: [number, number, number];
    duration: { hours: number; minutes: number };
    location: string;
}) => {
    createEvent(event, (error, value) => {
        if (error) {
            console.log(error);
            return;
        }

        const blob = new Blob([value], { type: 'text/calendar;charset=utf-8' });
        const url = URL.createObjectURL(blob);

        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'wedding.ics');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });
};
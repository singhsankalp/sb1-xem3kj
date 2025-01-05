import React from 'react';
import { Clock, Calendar } from 'lucide-react';
import type { ClassSchedule } from '../../types/events';

interface ScheduleDisplayProps {
  schedule: ClassSchedule;
}

export const ScheduleDisplay: React.FC<ScheduleDisplayProps> = ({ schedule }) => {
  return (
    <div className="space-y-4">
      <div className="flex items-start gap-3">
        <Calendar className="w-5 h-5 text-purple-600 mt-1 flex-shrink-0" />
        <div>
          <h4 className="font-medium mb-2">Class Days</h4>
          <div className="flex flex-wrap gap-2">
            {schedule.days.map((day) => (
              <span
                key={day}
                className="px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-sm font-medium"
              >
                {day}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="flex items-start gap-3">
        <Clock className="w-5 h-5 text-purple-600 mt-1 flex-shrink-0" />
        <div>
          <h4 className="font-medium mb-2">Time Slots</h4>
          <div className="space-y-2">
            {schedule.timeSlots.map((slot, index) => (
              <div
                key={index}
                className="px-3 py-2 rounded-lg bg-gray-100 text-gray-700 text-sm"
              >
                {slot.start} - {slot.end}
              </div>
            ))}
          </div>
        </div>
      </div>

      <p className="text-sm text-gray-600 mt-2">
        Classes run {schedule.frequency.toLowerCase()}
      </p>
    </div>
  );
};
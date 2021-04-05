import { ObjectEvent } from './objectEvent';

export class ModificationService {
  public adjustTimes(objectEvents: ObjectEvent[], at: Date): ObjectEvent[] {
    if (objectEvents.length === 0) {
      return objectEvents;
    }
    const firstEventHappenedAt: Date = objectEvents[0].time;
    objectEvents[0] = this.adjustTime(objectEvents[0], at);
    for (let i = 1; i < objectEvents.length; i = i + 1) {
      const offset = objectEvents[i].time.getTime() - firstEventHappenedAt.getTime();
      objectEvents[i] = this.adjustTime(objectEvents[i], new Date(at.getTime() + offset));
    }
    return objectEvents;
  }

  public adjustTime(objectEvent: ObjectEvent, at: Date): ObjectEvent {
    objectEvent.time = at;
    return objectEvent;
  }
}
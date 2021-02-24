import { ObjectEvent } from './objectEvent';
import { ObjectEventREST } from './objectEventREST';

export class ObjectEventMappingService {

  public toObjectEventREST(objectEvent: ObjectEvent): ObjectEventREST {
    return {
      topic: objectEvent.topic,
      time: objectEvent.time,
      id: objectEvent.id,
      eventType: objectEvent.eventType,
      object: objectEvent.object,
      objectType: objectEvent.objectType,
      payload: JSON.stringify(Array.from(objectEvent.payload.entries()))
    }
  }

  public fromObjectEventREST(restObjectEvent: ObjectEventREST): ObjectEvent {
    const inputObjectEvent: ObjectEvent = {
      topic: restObjectEvent.topic as string,
      time: restObjectEvent.time as Date,
      id: restObjectEvent.id as number,
      eventType: restObjectEvent.eventType as string,
      object: restObjectEvent.object as string,
      objectType: restObjectEvent.objectType as string,
      payload: new Map<string, string>(JSON.parse(restObjectEvent.payload))
    }
    return inputObjectEvent;
  }
}
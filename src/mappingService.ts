import { ObjectEvent } from './objectEvent';
import { ObjectEventREST } from './objectEventREST';
import { Topic } from './topic';
import { TopicREST } from './topicREST';

export class MappingService {
  public toObjectEventREST(objectEvent: ObjectEvent): ObjectEventREST {
    return {
      topic: objectEvent.topic,
      time: objectEvent.time.toUTCString(),
      id: objectEvent.id,
      eventType: objectEvent.eventType,
      object: objectEvent.object,
      objectType: objectEvent.objectType,
      payload: JSON.stringify(Array.from(objectEvent.payload.entries())),
      isTransient: objectEvent.isTransient
    }
  }

  public fromObjectEventREST(restObjectEvent: ObjectEventREST): ObjectEvent {
    return {
      topic: restObjectEvent.topic as string,
      time: new Date(restObjectEvent.time as string),
      id: restObjectEvent.id as number,
      eventType: restObjectEvent.eventType as string,
      object: restObjectEvent.object as string,
      objectType: restObjectEvent.objectType as string,
      payload: new Map<string, string>(JSON.parse(restObjectEvent.payload)),
      isTransient: restObjectEvent.isTransient
    };
  }

  public toTopicREST(topic: Topic): TopicREST {
    return {
      id: topic.id,
      name: topic.name
    }
  }

  public fromTopicREST(topicREST: TopicREST): Topic {
    return new Topic(topicREST.id, topicREST.name);
  }
}
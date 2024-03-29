'use strict';

import { MappingService } from '../src/mappingService';
import { ObjectEvent } from '../src/objectEvent';
import { Topic } from '../src/topic';

describe('MappingService', () => {
	it('should create an instance using its constructor', () => {
		const example: MappingService = new MappingService();
		expect(example).toBeDefined();
	});

	it('should return input ObjectEvent after converting back and forth', () => {
		const sampleInput: ObjectEvent = {
			topic: 'randomTopic2§',
			id: 5723,
			object: 'randonObject',
			objectType: 'objtsahik24S',
			eventType: ' hlkfaf',
			time: new Date(2021, 1, 2, 11, 13, 44),
			payload: new Map<string, string>([['a', 'bsad4'], ['b', 'adsada'], ['c', 'asd']]),
			isTransient: false
		};
		const testObject: MappingService = new MappingService();
		const returnValue = testObject.fromObjectEventREST(testObject.toObjectEventREST(sampleInput));
		expect(returnValue.topic).toEqual(sampleInput.topic);
		expect(returnValue.id).toEqual(sampleInput.id);
		expect(returnValue.object).toEqual(sampleInput.object);
		expect(returnValue.isTransient).toEqual(sampleInput.isTransient);
		expect(returnValue.objectType).toEqual(sampleInput.objectType);
		expect(returnValue.eventType).toEqual(sampleInput.eventType);
		expect(returnValue.time).toEqual(sampleInput.time);
		expect(returnValue.payload).toEqual(sampleInput.payload);
	});

	it('should return input Topic after converting back and forth', () => {
		const sampleTopic = new Topic('sampleId', 'sampleName');
		const testObject = new MappingService();
		const returnValue = testObject.fromTopicREST(testObject.toTopicREST(sampleTopic));
		expect(returnValue.id).toEqual(sampleTopic.id);
		expect(returnValue.name).toEqual(sampleTopic.name);
	});
});

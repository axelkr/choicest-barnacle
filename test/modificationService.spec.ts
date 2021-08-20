'use strict';

import { ModificationService } from '../src/modificationService';
import { ObjectEvent } from '../src/objectEvent';

describe('ModificationService', () => {

	it('should move time of event to the specified time', () => {
		const objectEvent: ObjectEvent = generateValidObjectEvent();
		const moveToDate = new Date(2020, 10, 10, 10, 10);
		const testObject = new ModificationService();
		expect(testObject.adjustTime(objectEvent, moveToDate).time).toEqual(moveToDate);
	});

	it('if several objectEvents are given, the first object is moved to the given date', () => {
		const anEvent: ObjectEvent = generateValidObjectEvent();
		const laterEvent: ObjectEvent = generateValidObjectEvent();
		const anEventTime = new Date(2020, 10, 10, 10, 10);
		const twoMinutesLater = new Date(2020, 10, 10, 10, 12);
		anEvent.time = anEventTime;
		laterEvent.time = twoMinutesLater;
		const moveToDate = new Date(2020, 3, 3, 3, 3);
		const testObject = new ModificationService();
		const result = testObject.adjustTimes([anEvent, laterEvent], moveToDate);
		expect(result[0].time).toEqual(moveToDate);
	});

	it('if several objectEvents are given, the offset between them stays the same', () => {
		const anEvent: ObjectEvent = generateValidObjectEvent();
		const laterEvent: ObjectEvent = generateValidObjectEvent();
		const anEventTime = new Date(2020, 10, 10, 10, 10);
		const twoMinutesLater = new Date(2020, 10, 10, 10, 12);
		anEvent.time = anEventTime;
		laterEvent.time = twoMinutesLater;
		const moveToDate = new Date(2020, 3, 3, 3, 3);
		const testObject = new ModificationService();
		const result = testObject.adjustTimes([anEvent, laterEvent], moveToDate);
		expect(Math.round(result[1].time.getTime() - result[0].time.getTime()) / (1000 * 60)).toEqual(2);
	});
});

const generateValidObjectEvent = () => {
	return {
		topic: 'randomTopic2§',
		id: 5723,
		object: 'randonObject',
		objectType: 'objtsahik24S',
		eventType: ' hlkfaf',
		time: new Date(2021, 1, 2, 11, 13, 44),
		payload: new Map<string, string>([['a', 'bsad4'], ['b', 'adsada'], ['c', 'asd']]),
		isTransient: false
	};
}
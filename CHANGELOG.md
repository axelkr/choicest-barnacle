# 2.5.0
- undo change from 2.1.0. It's the wrong abstraction that's using it 

# 2.4.0
- service available for shifting object events to a specific point in time

# 2.3.0
- objectEvent now have a property isTransient, i.e. whether they should be persisted or stay transient. Please use persisted as a default, as that will be the correct choice in the majority of events.

# 2.2.0
- provide mapping for transferring a topic via REST

# 2.1.0
- provide topic as a class so it can be extended later on with properties (such as readonly);

# 2.0.0
- fix type error

# 1.0.0
- extracted model from happy-barnacle
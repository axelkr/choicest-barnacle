# v2.3.0
- objectEvent now have a property isTransient, i.e. whether they should be persisted or stay transient. Please use persisted as a default, as that will be the correct choice in the majority of events.

# v2.2.0
- provide mapping for transferring a topic via REST

# v2.1.0
- provide topic as a class so it can be extended later on with properties (such as readonly);

# v2.0.0
- fix type error

# v1.0.0
- extracted model from happy-barnacle
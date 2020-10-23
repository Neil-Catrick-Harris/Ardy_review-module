DROP KEYSPACE IF EXISTS mykea;

CREATE KEYSPACE mykea
  WITH REPLICATION = {
    'class' : 'SimpleStrategy',
    'replication_factor' : 1};
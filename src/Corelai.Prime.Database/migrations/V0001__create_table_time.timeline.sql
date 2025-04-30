CREATE TABLE time.timeline (
           id uuid PRIMARY KEY,
           code varchar(100) NOT NULL,
           title varchar(200) NOT NULL,
           date timestamp NOT NULL,
           summary varchar(1000) NOT NULL,
           tags text[] NOT NULL,
           lang varchar(10) NOT NULL,
           version integer NOT NULL,
           image_path varchar(500) NOT NULL
);
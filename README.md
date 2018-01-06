# ethgasstation

A modern, semisanctioned development fork of ethgasstation.info, meant
to scale. Built as a series of microservices for easy containerization
and deployment to various cloud infrastructure providers.

Components are converted into various submodules:

* **backend**: The
  [ethgasstation-adaptive-oracle](https://github.com/ethgasstation/ethgasstation-adaptive-oracle).
* **api**: An Express.js/Node.js REST-ish API for querying.
* **frontend**: A modern API consumer frontend.

Other roles:

* **redis**: A [Redis](https://redis.io) datastore for API caching.
* **mariadb**: A [MariaDB](https://mariadb.org) SQL datastore used by
  the oracle.

Each of these roles performs independently of the others. To run the
full web application, use `docker-compose`.

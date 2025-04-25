### Docker user and group

Containers run with appuser and appgroup to limit container capabilities.

#### To add the group use

sudo groupadd --system --gid 39000 appgroup

#### To add the user use
sudo useradd --system --uid 10000 --gid 39000 --no-create-home --shell /usr/sbin/nologin appuser

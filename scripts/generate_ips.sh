#!/usr/bin/env bash
set -eo pipefail
[[ $TRACE ]] && set -x

# Domain lookup target
DOMAIN=${DOMAIN:-"syntaqx.mynetgear.com"}
DYNDNS=$(dig +short "$DOMAIN")

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
OUTFILE=$(realpath "$DIR/../_data/ips.yaml")

# Overwrite previous IP data
cat > "$OUTFILE" <<EOF
---

- name: dyndns-netgear
  addr: $DYNDNS/32

EOF


#!/usr/bin/env bash
set -eo pipefail
[[ $TRACE ]] && set -x

# Domain lookup target
DOMAIN=${DOMAIN:-"subdomain.ddns.host"}

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
OUTFILE=$(realpath "$DIR/../ips.md")

# Reset the file
cat <<EOT > "$OUTFILE"
---
layout: null
permalink: /ips.json
---

EOT

# Output as pretty JSON
jq -n \
  --arg ipv4_addr "$(dig +short "$DOMAIN")" \
  '{ipv4: [ $ipv4_addr + "/32" ], updated_at: now | gmtime | todate}' >> "$OUTFILE"

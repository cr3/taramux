VENV := .venv

RUN := uv run
PYTHON := $(RUN) python
TOUCH := $(PYTHON) -c 'import sys; from pathlib import Path; Path(sys.argv[1]).touch()'

uv.lock: pyproject.toml
	uv lock

# Build .venv with deps.
$(VENV): uv.lock
	@echo Installing environment
	@uv sync --frozen --all-extras
	@$(TOUCH) $@

# Convenience target to build venv
.PHONY: setup
setup: $(VENV)

.PHONY: check
check: $(VENV)
	@echo Checking Poetry lock: Running poetry check --lock
	@uv lock --check
	@echo Linting code: Running ruff
	@$(RUN) ruff check .

.PHONY: test
test: $(VENV)
	@echo Testing code: Running pytest
	@$(RUN) pytest

.PHONY: coverage
coverage:

.DEFAULT_GOAL := test
